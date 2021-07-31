let fs = require("fs");

let inputArr = process.argv.slice(2);



// segregate the file Arr and option arr
let fileArr = [];
let optionArr = [];

for(let i = 0; i < inputArr.length; i++)
{
    let  firstChar =  inputArr[i].charAt(0);
    if(firstChar == "-")
    {
          optionArr.push(inputArr[i]);
    }
    else
    {
          fileArr.push(inputArr[i]);
    }
}

// check whether the file exist or not   // first edge case
for(let i = 0 ; i < fileArr.length; i++)
{
  let ans = fs.existsSync(fileArr[i]);
  if(ans == false)
  {
      console.log("file does not exist");
      return;
  }
}

// content append karke  print karwana
let content = "";
for(let i = 0;  i < fileArr.length; i++)
{
    content += fs.readFileSync(fileArr[i]) + "\r\n" ;
}
//console.log(content);
//console.log("******************************************************************");
let contentArray = content.split("\r\n");

// for -s 
//if(optionArr.includes("-s"))
if(optionArr[0] == "-s")
{
    //console.log("in -s block");
        
       // console.log(contentArray);
        for(let i = 1; i < contentArray.length; i++)
        {
            if(contentArray[i] == "" &&  contentArray[i - 1] == "")
            {
                contentArray[i] = null;
            }
           else if(contentArray[i] == "" && contentArray[i - 1] == null)
            {
                contentArray[i] = null;
            }
        }
//console.log(contentArray);
        let tempArr = [];
        for(let i  = 0; i < contentArray.length; i++)
        {
            if(contentArray[i] != null)
            {
                tempArr.push(contentArray[i]);
            }
        }
        console.log(tempArr.join("\r\n"));
        
}
// for -n
// add numbering to every line
//if(optionArr.includes("-n"))
if(optionArr[0] == "-n")
{
     let  contentArray = content.split("\r\n");
     //console.log("*******************");
     //console.log(contentArray);
     let tempArr = [];
     for(let i = 0; i < contentArray.length; i++)
     {
         tempArr[i] = i + " " + contentArray[i];
     }
     console.log(tempArr.join("\r\n"));
}



// for -b

//if(optionArr.includes("-b"))
if(optionArr[0] == "-b")
{
    let count = 1;
    let contentArray = content.split("\r\n");
    let tempArr = [];
    for(let i = 0; i < contentArray.length; i++)
    {
        if(contentArray[i] != "")
        {
            tempArr[i] =  count + " " + contentArray[i];
            count++;
        }
        else
        {
            tempArr[i] = contentArray[i];
        }
    }
    console.log(tempArr.join("\r\n"));
}



