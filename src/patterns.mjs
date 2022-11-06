const address = /^[\w\d,\\.-]+$/
const cc = /^(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{6})$/
const code = /^\d+$/
const number = /^\d+$/
const email = /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/m
const http = /^(http(s)?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const hex = /^[A-Fa-f\d]+$/
const ipv4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
const md5 = /^[A-Za-z0-9]{5,32}$/
const login = /^[a-zA-Z\d][A-z\d.-_+]+$/
const phone = /^\+?[\d\s]{0,16}$/
const tag = /^[\w]+$/
const text = /.*/
const title = /^.*$/
const uri = /^[a-z0-9-]+$/
const XMLTag = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/

export {

    address,
    cc,
    code,
    email,
    http,
    hex,
    ipv4,
    login,
    number,
    md5,
    phone,
    tag,
    text,
    title,
    uri,
    XMLTag,
}
