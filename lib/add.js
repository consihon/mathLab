'use strict';

const arithmetic=module.exports={};

arithmetic.plus = function(nums){
  if (!falsey(nums)) return null;
  let sum=0;
  while(nums[nums.length-1]!==NaN){
    sum+=nums.pop();
    if (nums.length===0) return sum;
  }
};

arithmetic.subtract = function(nums){
  if (!falsey(nums)) return null;
  let diff = nums.shift();
  while(nums.length>-1){
    diff-=nums.shift();
    if (nums.length===0){
      return diff;
    }
  }
};

arithmetic.multiply=function(nums){
  if (!falsey(nums)) return null;
  let product=nums.shift();
  if (nums.length===0)return product;
  while(nums[0]){
    console.log(nums[0],product);
    product*=nums.shift();
    if (nums.length===0) return product;
  }
};

arithmetic.divide=function(nums){
  if (!falsey(nums)) return null;
  let product=nums.shift();
};

let falsey= function (nums){
  if (Array.isArray(nums)){
    for (let i in nums){
      if (nums[i]===NaN){
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
};