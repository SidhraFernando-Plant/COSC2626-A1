import * as AWS from 'aws-sdk';

const docClient = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
  secretAccessKey: 'dZihY08Tfio+KkBWZONA43E/SzanFjhlpvaVoHDI',
  accessKeyId: 'ASIAXXV5V5ND6XLDNCWN',
});

export const fetchData = (tableName) => {
  var params = {
    TableName: tableName,
  };

  docClient.scan(params, function (err, data) {
    console.log('hello');
    if (!err) {
      console.log(data);
    } else {
      console.log(err);
    }
  });
};
