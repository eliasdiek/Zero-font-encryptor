import React, { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [inputData, setInputData] = React.useState('')
  const [outputData, setOutputData] = React.useState('')
  
  let baseElement = '<span style="display: none">hidden element</span>';
  //insert the randomized baseElement in ">...<" of input string.
  const insertElement = (input)=>{
    let startPos=0,endPos=0, randomNum=0, randomArray=[], i=0;
    let result = input, addedLength = 0; //set the result as input. added elements'length = 0.
    let tempStr=""; //check the <head> or <style> element.
    startPos = input.indexOf("</head>") > input.indexOf("</style>") ? input.indexOf("</head>")+8 : input.indexOf("</style>")+8; 
    while (endPos < input.length){
      startPos = input.indexOf(">",startPos);  
      endPos = input.indexOf("<", startPos)>=0 ? input.indexOf("<", startPos) : input.length+1;
      tempStr=input.substring(startPos+1 , endPos).trim(); //to endPos-1, remove white-spaces,
      startPos = input.indexOf(tempStr,startPos); //reset the start pos after removing white-spaces.
      if (tempStr.length > 0 ){   
        randomNum = Math.floor(Math.random()*3); //[0,1,2]
        i=0; randomArray=[]; //randomize the randomArray.
        if (randomNum > 0){       
          while (i < randomNum){ 
            randomArray.push(Math.floor(Math.random()*(tempStr.length+1))+startPos); //position : involved endPos. >=startPos+1
            i++;
          } //sort the randomArray to ascending order.
          randomArray.sort(function(a,b){return a-b}); //console.log("randomArray", randomArray)
          randomArray.forEach(function(value,index,array){  //
            result = result.substring(0, value+addedLength) + baseElement + result.substr(value+addedLength);
            addedLength += baseElement.length;
          })
        }
      }
      startPos = endPos; //set startPos as endPos.
    }
    return result;
  }
  // useEffect(() => {
  //   setOutputData(insertElement(inputData));
  // }, [inputData])

  return (
    <div>
      <Head>
        <title>Encryptor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-4 py-8 md:px-8 md:py-8'>
        <h1 className='text-center text-3xl'>
          HTML Letter Encryptor
        </h1>

        <div className='py-4'>
          <div className='py-2'>
            <textarea
              className='w-full h-48 border border-gray-300 p-4'
              cols={0}
              onChange={e => setInputData(e.target.value)}
              placeholder="Insert your HTML string here"
            ></textarea>
          </div>
          <div className='py-2 flex items-center justify-center'>
            <button className='py-3 px-12 rounded-sm bg-black text-xl text-white focus:ring-2 focus:ring-black ring-offset-1'
              onClick={() => setOutputData(insertElement(inputData))}>
              Encrypt
            </button>
          </div>
          <div className='py-2'>
            <textarea
              className='w-full h-48 border border-gray-300 p-4'
              cols={10}
              // onChange={e => setOutputData(e.target.value)}
              placeholder="Encrypted HTML string will output here"
              readOnly
              value={outputData}
            ></textarea>
          </div>
          <div className='py-2'>
            <h3 className='mb-2'>Preview:</h3>
            <div
              className='w-full min-h-fit border border-gray-300 p-4 overflow-auto'
              dangerouslySetInnerHTML={{
                __html: outputData ? outputData : inputData
              }}
            ></div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
