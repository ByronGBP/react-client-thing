// Will format from 2018-08-21T19:29:02.041Z to 21/08/2018
export const formatDate = (date) => {
  const YYMMDD = date.split('T')[0].split('-');
  const DDMMYY = YYMMDD.reverse();
  const formatedDate = DDMMYY.join('/');
  return formatedDate;
};