const winston = require('winston');
const {format} = winston;
//winston.format.combine;
const {combine} = format;

require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
  level: 'info',
  //저장할 파일
  filename: "./logs/%DATE%.log",
  //저장 양식
  datePattern : "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "20m", 
  maxFiles: "1d",
  format: combine(
    format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
    format.json()
  ),
});

const logger = winston.createLogger({
  transports: [transport]
});

module.exports = logger;