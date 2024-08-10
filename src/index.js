module.exports = function toReadable (number) {
    let digits = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
      };
    
      const arr = number.toString().split("");
      console.log(arr);
    
      switch (arr.length) {
    
        case 1:
            return digits[number];
        
        case 2:
                if (number <= 20 || arr[1] == 0) {
                    return digits[number];
                } else {
                    return `${digits[arr[0] + 0]} ${digits[arr[1]]}`;
                }
    
        case 3:
            if (arr[1] == 0 && arr[2] == 0) {
                return `${digits[arr[0]]} hundred`;
            } else if (arr[1] != 0 && arr[2] == 0) {
                return `${digits[arr[0]]} hundred ${digits[arr[1] + 0]}`;
            } else if (arr[1] == 1) {
                return `${digits[arr[0]]} hundred ${digits[number % 100]}`;
            } else if (arr[1] == 0) {
                return `${digits[arr[0]]} hundred ${digits[arr[2]]}`;
            } else {
                return `${digits[arr[0]]} hundred ${digits[arr[1] + 0]} ${arr[2] != 0 ? digits[arr[2]] : ''}`;
            }
    }
}
