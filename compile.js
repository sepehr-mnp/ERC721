 const path = require('path');
 const fs = require('fs-extra');
 const solc= require('solc');
 const { url } = require('inspector');

 const buildPath = path.resolve(__dirname, 'build');

 fs.removeSync(buildPath);

 const campaignPath= path.resolve(__dirname,'contract',   'ERC721.sol');
 const source = fs.readFileSync(campaignPath,'utf-8');
 var input = {
    language: 'Solidity',
    sources: {
             'ERC721.sol': {
              content: source
   }
},
    settings: {
              outputSelection: {
              '*': {
                 '*': ['*']
                  }
               }
      }
};
module.exports = JSON.parse(solc.compile(JSON.stringify(input)))['contracts']['ERC721.sol']['ERC721'];
