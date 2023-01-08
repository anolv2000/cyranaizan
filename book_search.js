/*
This is a practical assessment for the position of Software Engineer.
The author is Aizan Cyran
*/
function findSearchTermInBooks(searchTerm, scannedTextObj)
{
 var specialChars = "~`!#$%^&*+=[]\\\';,/{}|\":<>?";
 for (var h = 0; h < specialChars.length; h++) {
 if (searchTerm.includes(specialChars[h]) || searchTerm==="") {
 console.log ("The search term contains a special character. \nThese are not allowed.\n");
 return "Enter a valid  for your search.";
 }
 else
 if (!searchTerm.trim()) {
 console.log ("Empty terms are not allowed. \nYour Term is all whitespace.\n");
 return "Enter a valid term for your search.";
 }
 }
 var contentResults = [];
 //var keyTermLowerCase=keyTerm.toLowerCase();
 
 
 var book = JSON.parse(scannedTextObj);

 var numberOfBook = book.length;
 
 if (numberOfBook===0) {
 console.log ("The search must be done on at least one book");
 return "Enter the content for at least one book.";
 }
 
 for(var i=0; i<numberOfBook; i++)
 {
 
 var numberOfPage = book[i].content.length;
 
 if (numberOfPage===0) {
 console.log ("The book "+book[i].ISBN+" has no content. \n"+" A book must have at least one page.");
 return "Please provide a book that has some content.";
 }
 
 for(var j=0; j<numberOfPage; j++)
 {
 var lineText = book[i].content[j].Text;
 var lineTextSplit = lineText.split(/\W+/);
 // console.log(lineTextSplit);
 
 for(var k=0; k<lineTextSplit.length; k++)
 {
 if(lineTextSplit[k] === searchTerm)
 {
 var result = new Object();
 result.ISBN = book[i].ISBN;
 result.page = book[i].content[j].Page;
 result.line = book[i].content[j].Line;
 contentResults.push(result);
 }
 
 }
 
 }
 }
 var jsonResult = {
 "search term" : searchTerm,
 "results" :contentResults
 };
 
 var myJSONOutput = JSON.stringify(jsonResult, null, "\t");
 return myJSONOutput;
}
 const twentyLeaguesIn =`[
 {
 "title": "twenty thousand leagues under the sea",
 "ISBN": "9780000528531",
 "content":[
 {
 "Page":31,
 "Line": 8,
 "Text": "now simply went on by her own momentum. The Dark-"
 },
 {
 "Page":31,
 "Line":9,
 "Text": "ness was then profound; and however good the Canadian\'s"
 },
 {
 "Page":31,
 "Line":10,
 "Text": "eyes were, I asked myself how he had the managed to see, and"
 }
 ]
 }
 ]` ;
 
 
 
 /*var jsonContentSample3 =`[
 {
 "title": "twenty thousand leagues under the sea",
 "ISBN": "9780000528531",
 "content":[]
 }
 ]` 
 console.log(findSearchTermInBooks("the", jsonContentSample));
 */

console.log(findSearchTermInBooks("the", twentyLeaguesIn));

 ;