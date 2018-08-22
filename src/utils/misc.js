// Will format from 2018-08-21T19:29:02.041Z to 21/08/2018
export const formatDate = (date) => {
  const YYMMDD = date.split('T')[0].split('-');
  const DDMMYY = YYMMDD.reverse();
  const formatedDate = DDMMYY.join('/');
  return formatedDate;
};

//Will format from /news/5b7c67febe8be03231c99653 to "news" or "where you come from"
export const formatPath = (path) => {
  if (path.includes('news')) {
    return 'news';
  }
  return 'where you come from';
};