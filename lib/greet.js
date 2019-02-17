'use strict';

let x=module.exports={};

x.greet = function(name){
  if(name&& (typeof name === 'string' || name instanceof String) && name!=='') {
    return (`Hello ${name}`);
  }else{
    return null;
  }
};
x.greet('name');
