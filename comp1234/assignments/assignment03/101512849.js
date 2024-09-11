function part1(){
    // Start your code here for first part. There is no need to return any value.
    let studentId = "101512849";
    let FullName = "Anand Sharma";
    let LabProfessor = "Leonard Zajaczkowski";
    let LabSessionDay = "Wednesday";

    function encode(name) {
        let encodedName = '';
        for (let i = 0; i < name.length; i++) {
            let Code = name.charCodeAt(i) + 1;
            encodedName += String.fromCharCode(Code);
        }
        return encodedName;
    }

    let encodedStudentID = encode(studentId);
    let encodedFullName = encode(FullName);
    let encodedLabProfessor = encode(LabProfessor);
    let encodedLabSessionDay = encode(LabSessionDay);

    document.write('<aside style="position: fixed; bottom: 80px; right: 0;">');
    document.write('<p><strong>Student ID:<strong> '  +  studentId + ' <strong>Full Name:<strong> '  +  FullName + '</p>');
    document.write('<p><strong>Lab Professor:<strong> '  +  LabProfessor + ' <strong>Lab Session Day:<strong> '  +  LabSessionDay + '</p>');
    document.write('</aside>');

    document.write('<aside style="position: fixed; bottom: 0; right: 0;">');
    document.write('<p><strong>Encoded Student ID: </strong>  '  +  encodedStudentID + ' <strong>Encoded Full Name:</strong> '  +  encodedFullName + '</p>');
    document.write('<p><strong>Encoded Lab Professor:</strong>  '  +  encodedLabProfessor + '<strong>Encoded Lab Session Day:<strong> '  +  encodedLabSessionDay + '</p>');
    document.write('</aside>');


}

function part2(num1, num2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    num1 += 5;
    num2 -= 3;
    if (num1 < num2) {
        _return = -1;
    } else if (num1 === num2) {
        _return = 0;
    } else {
        _return = 1;
    }
  
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part3(startNum, endNum) {

    let _return = '';
    // To hold the sum of numbers for the divisibility condition
    let sum = 0;

    if (startNum < endNum) {
        for (let i = startNum; i <= endNum; i++) {
          _return=  _return+String(i) ;
            sum += i;
        }
    }

    if (startNum > endNum) {
        for (let i = startNum; i >= endNum; i--) {
            _return += i;
            sum += i;
        }
    }

    if (startNum === endNum) {
        _return = (startNum + endNum).toString();
        sum = startNum + endNum;
    }

    if (sum % 3 === 0) {
        _return = "Magic" + _return;
    }


/* Your code ends here.
   Don't add or change anything after this line.*/
       return _return;      
}




function part4(array_index, array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    if (array_index >= 0 && array_index < array.length) {
        let _return;
        if (array[array_index] % 2 === 0) {
            _return = 0;
            for (let i = 0; i < array_index; i++) {
                _return += array[i];
            }
        }
        else if (array[array_index] % 2 !== 0) {
            _return = 0;
            for (let A = array_index + 1; A < array.length; A++) {
                _return += array[A];
            }
        }
        if (array[array_index] === 0) {
            _return = true;

        }
        return _return;

    } else {
        return false;
    }

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


function part5(array) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            // Odd numbers
            sumOdd += array[i];
        } else {
            // Even numbers
            sumEven += array[i];
        }
    }
    let oddarray = [];
    let evenArray = [];
    for (let P = 0; P < array.length; P++) {
        if (array[P] % 2 !== 0) {
            oddarray.push(array[P]);
        } else {
            evenArray.push(array[P]);
        }
    }
     _return = oddarray.concat(evenArray, sumOdd, sumEven);

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


