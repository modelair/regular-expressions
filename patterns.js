export default {
  cc: /^(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{6})$/,
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  login: /^[a-zA-Z0-9][A-z0-9.-_+]+$/,
  email: /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/m,
  title: /^.*$/,
  md5: /^[A-Za-z0-9]{5,32}$/,
  phone: /^\+?[\d\s]{0,16}$/,
  uri: /^[a-z0-9-]+$/,
  tag: /^[\w]+$/,
  text: /.*/,
  address: /^[a-zA-Zа-яёА-ЯЁ0-9,\\.-]+$/,
  XMLTag: /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,
  http: /^(http(s)?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  hex: /^[A-Fa-f0-9]+$/,
  code: /^[0-9]+$/,

}
