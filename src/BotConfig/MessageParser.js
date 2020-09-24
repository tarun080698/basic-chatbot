class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  
  parse(message) {
  }
}

export default MessageParser;




// // import services_data from "../DataSource/sample.json";
// import services_data from "../DataSource/JsonStructure.json";
// import stop from "../DataSource/stop_words.json";

// const res_data = services_data.Resolution[0].Problems;
// const ins_data = services_data.Investigations[0].Problems;
// let flag_data = true;


// class MessageParser {
//   constructor(actionProvider, state) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

//   parse(message) {
//     let user_message = message.trim().toLowerCase();
//     let services = [];
//     // let arr = [];
//     // let arr1 = [];
//     if (user_message.length > 120) {
//       this.actionProvider.setBotMessage(
//         "Description entered is too long😕, Try again💪!"
//       );
//       this.actionProvider.setBotMessage("Try to describe in 20-25 words.");
//     }
//     else {
//       // console.log(flag_data);
//       if(this.tokenization(user_message, res_data))
//         { let values = this.tokenization(user_message,res_data);
//           values.forEach(item=>{
//             services.push(item);
//           })
//         }
//       if(this.tokenization(user_message, ins_data))
//         { let values = this.tokenization(user_message,ins_data);
//           values.forEach(item=>{
//             services.push(item);
//           })
//         }
      
//       // arr.push(this.tokenization(user_message, res_data));}
//       // console.log(services);
//       // if(this.tokenization(user_message, ins_data))
//       //   {arr1.push(this.tokenization(user_message, ins_data));}
//       // for (let i = 0; i < 3; i++) {
//       //   if (arr[0][i] !== undefined)
//       //   //  console.log(arr[i]);
//       //   {
//       //     services.push(arr[0][i]);
//       //   }
//       //   if (arr1[0][i] !== undefined)
//       //     services.push(arr1[0][i]);
//       // }
//       console.log(services);
//       // if (services.length === 0) {

//       //     services = this.tokenization(user_message, ins_data);
//       //     // console.log(flag_data);
//       //     flag_data = false;
//       //     // console.log(flag_data);
//       // }
//     }
//     if (user_message === '') {
//       this.actionProvider.handleEmptyInput();
//     }

//     else {
//       console.log(services);
//       if (services.length!==0) {
//         this.actionProvider.handleFilteredServices(services, flag_data);
//       }
//       else {
//         this.actionProvider.setBotMessage("Seems like something is wrong.");
//       }
//     }
//   }

//   tokenization(user_message, data) {

//     let delimiters = stop.delimiters;
//     const stop_words = stop.stop_words;
//     let v = "";
//     for (let i = 0; i < user_message.length; i++) {
//       if (user_message[i] === " ") {
//         v += " ";
//       }
//       if ((user_message.charCodeAt(i) >= 65 && user_message.charCodeAt(i) <= 122) || (user_message >= 48 && user_message <= 57)) {
//         v += user_message[i];
//       }
//     }
//     user_message = v;

//     for (let j = 0; j < user_message.length; j++) {
//       let input = user_message;

//       for (var item of delimiters) {
//         if (input[j] === item) user_message = input.replace(item, " ");
//       }
//       // console.log(user_message);
//     }
//     const words = user_message.split(/\W+/).filter(function (token) {
//       token = token.toLowerCase();
//       return !stop_words.includes(token);
//     });

//     let number_of_problems = data.length;
//     let tags_list = [];
//     for (var i = 0; i < number_of_problems; i++) {
//       tags_list.push(data[i].tags);
//     }

//     let count = 0,
//       tag_count = 0,
//       check = 1;
//     let problems_data = data;
//     let final_services = [];


//     for (let i = 0; i < number_of_problems; i++) {
//       for (let j = 0; j < words.length; j++) {
//         if (tags_list[i].includes(words[j])) {
//           count += 1;
//           if (check) {
//             tag_count = count;
//           }
//           if (count >= tag_count) {
//             tag_count = count;
//             if (count > tag_count) {
//               tag_count = count;
//               final_services.pop();
//               final_services.push(problems_data[i].Problem);
//             } else {
//               if (check) {
//                 final_services.push(problems_data[i].Problem);
//                 check = 0;
//               } else {
//                 final_services.push(problems_data[i].Problem);
//               }
//             }
//           }
//         }
//       }
//     }

//     const most_Frequent = (array) => {
//       var frequency = {},
//         value;
//       // compute frequencies of each value
//       for (var i = 0; i < array.length; i++) {
//         value = array[i];
//         if (value in frequency) {
//           frequency[value]++;
//         } else {
//           frequency[value] = 1;
//         }
//       }
//       // make array from the frequency object to de-duplicate
//       var uniques = [];
//       for (value in frequency) {
//         uniques.push(value);
//       }
//       // sort the uniques array in descending order by frequency
//       function compareFrequency(a, b) {
//         return frequency[b] - frequency[a];
//       }
//       return uniques.sort(compareFrequency);
//     };

//     const services =
//       most_Frequent(final_services) !== null
//         ? most_Frequent(final_services)
//         : null;

//     return services;

//   }
// }

// export default MessageParser;




//     // let uri = user_message;
//     // function encode_utf8(s)
//     // {
//     //   return unescape(s);
//     // }
//     // function decode_utf8(s)
//     // {
//     //   return decodeURIComponent(s) ;
//     // }
//     // console.log(encode_utf8(uri));
//     // console.log(decode_utf8(uri));

//     // utf8  encoding and decoding
//     // console.log(user_message);
//     // console.log(toUTF8Array(user_message));
//     // console.log(user_message);

//     // console.log(JSON.stringify(Object.assign({}, words)));

//     // line 14 
//     //working code for converting text to utf8
//     // var uri = user_message;
//     // var uri_enc = encodeURI(uri);
//     // console.log(uri_enc)
//     // var uri_dec = decodeURI(uri_enc);
//     // console.log(uri_dec)
