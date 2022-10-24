import SparkMD5 from "spark-md5";

/**
 * 文件切割
 * @param file File
 * @param chunkSize 块大小，默认 2MB
 * @returns
 */
export const sliceFile = async (file: File, chunkSize = 2 * 1024 ** 2) => {
  const blobSlice = File.prototype.slice;
  const spark = new SparkMD5.ArrayBuffer();
  const chunks: Blob[] = [];

  const chunkTotal = Math.ceil(file.size / chunkSize);

  for (let i = 0; i < chunkTotal; i++) {
    const start = i * chunkSize;
    const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;

    const fileChunk = blobSlice.call(file, start, end);
    chunks.push(fileChunk);

    const buffer: ArrayBuffer = await new Promise((res, rej) => {
      const fileReader = new FileReader();

      fileReader.onload = function (e) {
        if (process.env.NODE_ENV === 'development') {
          console.log('当前块:', i, '总数:', chunkTotal);
        }
        res(e.target?.result as ArrayBuffer);
      };

      fileReader.onerror = function () {
        rej(`文件块 ${i} 读取错误`);
      };

      fileReader.readAsArrayBuffer(fileChunk);
    });

    spark.append(buffer);
  }

  const md5 = spark.end();

  return { md5, chunks };
};

/**
 * 获取blob的MD5值
 * @param blob 
 * @returns 
 */
export const getBlobMd5 = async (blob: Blob) => {
  const spark = new SparkMD5.ArrayBuffer();
  const buffer = await blob.arrayBuffer();
  spark.append(buffer);
  return spark.end();
};
