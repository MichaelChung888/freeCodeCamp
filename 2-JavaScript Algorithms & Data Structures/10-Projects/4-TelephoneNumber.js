/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/
function telephoneCheck(str) {
    let regex1 = /^1?[\s(]*\d{3}[\s-)]*\d{3}[\s-]*\d{4}$/g;
    let regex2 = /\(|\)/g; //Check if there is a "(" or a ")"
    let regex3 = /(\((.{3})\))/g; //Look for "( 3 numbers inside )"
    console.log(str.match(regex1));
    console.log(str.match(regex2));
    console.log(str.match(regex3));
    if(regex2.test(str)){
      return regex1.test(str) && regex3.test(str);
    }
    else {
      return regex1.test(str);
    }
    /*

    */
}
  
/* Alternative
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

1) ^(1\s?)? = At the start of string, there must be 0 or 1 "1\s?"   e.g "1" or "1 " or ""   not e.g "2" or "10 "
2) (\(\d{3}\)|\d{3}) = Look for "( 3 numbers inside )" or "3 numbers"
3) [\s\-]? = Look for " " or "-" basically
4) d{3}[\s\-]?\d{4} = Same thing basically where look for "3 numbers " " or "-" and 4 numbers"
*/

telephoneCheck("2 (757) 622-7382");