// To add more song, just copy the following code and paste inside the array

//   {
//     name: "Here is the music name",
//     artist: "Here is the artist name",
//     img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
//     src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
//   }

//paste it inside the array as more as you want music then you don't need to do any other thing

let allMusic = [
  {
    name: "Harley Bird - Home",
    artist: "Jordan Schor",
    img: "music-1",
    src: "music-1"
  },
  {
    name: "Ikson Anywhere – Ikson",
    artist: "Audio Library",
    img: "music-2",
    src: "music-2"
  },
  {
    name: "Beauz & Jvna - Crazy",
    artist: "Beauz & Jvna",
    img: "music-3",
    src: "music-3"
  },
  {
    name: "Hardwind - Want Me",
    artist: "Mike Archangelo",
    img: "music-4",
    src: "music-4"
  },
  {
    name: "Jim - Sun Goes Down",
    artist: "Jim Yosef x Roy",
    img: "music-5",
    src: "music-5"
  },
  {
    name: "Lost Sky - Vision NCS",
    artist: "NCS Release",
    img: "music-6",
    src: "music-6"
  },
  {
    name: "Humma Humma",
    artist: "Jubin Nautiyal, Shashaa Tirupati",
    img: "music-7",
    src: "music-7"
  },
  {
    name: "Gallan Goodiyaan",
    artist: " Yashita Yashpal Sharma, Manish J Tipu, Shankar Mahadevan, Farhan Akhtar, Sukhwinder Singh",
    img: "music-8",
    src: "music-8"
  },
  {
    name: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj",
    img: "music-9",
    src: "music-9"
  },
  {
    name: "295",
    artist: "Sidhu Moose Wala",
    img: "music-10",
    src: "music-10"
  },
  {
    name: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Alka Yagnik",
    img: "music-11",
    src: "music-11"
  },
  {
    name: "Wo Din Bhi Kya Din The",
    artist: "Arijit Singh",
    img: "music-12",
    src: "music-12"
  },
  {
    name: "Badtameez Dil",
    artist: " Benny Dayal, Shefali Alvares",
    img: "music-13",
    src: "music-13"
  },
  {
    name: "Balam Pichkari",
    artist: "Shalmali Kholgade, Vishal Dadlani",
    img: "music-14",
    src: "music-14"
  },
  {
    name: "Bedardi Se Pyaar Ka",
    artist: "Jubin Nautiyal, Meet Bros",
    img: "music-15",
    src: "music-15"
  },
  {
    name: "Bekhayali",
    artist: "Sachet Tandon, Sachet Parampara",
    img: "music-16",
    src: "music-16"
  },
  {
    name: "BROWN MUNDE",
    artist: " AP Dhillon, Gurinder Gill, Shinda Kahlon, Gminxr",
    img: "music-17",
    src: "music-17"
  },
  {
    name: "Meri Zindagi Hai Tu",
    artist: "Jubin Nautiyal, Neeti Mohan",
    img: "music-18",
    src: "music-18"
  },
  {
    name: "Sab Tera ",
    artist: "Armaan Malik",
    img: "music-19",
    src: "music-19"
  },
  {
    name: "Dheere Dheere Se Meri Zindagi ",
    artist: "Hrithik Roshan_ Sonam Kapoor _ Yo Yo Honey Singh",
    img: "music-20",
    src: "music-20"
  },
  {
    name: "Shamshera Title Track",
    artist: "Sukhwinder Singh, Abhishek Nailwal",
    img: "music-21",
    src: "music-21"
  },
  {
    name: "Dil Galti Kar Baitha Hai",
    artist: "Jubin Nautiyal _ Mouni Roy _ Manoj M _ Ashish P",
    img: "music-22",
    src: "music-22"
  },
  {
    name: "Dua Karo",
    artist: " Siddharth Kasyap _ Stebin Ben _ Kumaar _ Pratik Sehajpal _ Sandeepa Dhar _ Anshu",
    img: "music-23",
    src: "music-23"
  },
  {
    name: "Pehli Pehli Baar",
    artist: "Prakriti_Darshan",
    img: "music-24",
    src: "music-24"
  },
  {
    name: "Malang (Title Track)",
    artist: " Aditya Roy Kapur_ Disha Patani_ Anil K_ Kunal K _ Ved S _ Mohit S",
    img: "music-25",
    src: "music-25"
  },
  {
    name: "Tera Yaar Hoon Main",
    artist: "Arijit Singh Rochak Kohli",
    img: "music-26",
    src: "music-26"
  },
  {
    name: "High Rated Gabru",
    artist: "Guru Randhawa_ Neha Kakkar ",
    img: "music-27",
    src: "music-27"
  },
  {
    name: "Kaun Tujhe",
    artist: "Armaan Malik",
    img: "music-28",
    src: "music-28"
  },
  {
    name: "Kesariya",
    artist: "Arijit Singh",
    img: "music-29",
    src: "music-29"
  },
  {
    name: "Maine Tera Naam Dil Rakh Diya",
    artist: "Raghav Chaitanya",
    img: "music-30",
    src: "music-30"
  },
  {
    name: "Mast Nazron Se",
    artist: " Jubin Nautiyal, Rochak Kohli, Nasir Iqbal",
    img: "music-31",
    src: "music-31"
  },
  {
    name: "Tu Meri Zindagi",
    artist: " Parampara_Sachet",
    img: "music-32",
    src: "music-32"
  },
  {
    name: "Vaaste",
    artist: "Dhvani Bhanushali",
    img: "music-33",
    src: "music-33"
  },
  {
    name: "Yaar Mod Do",
    artist: "Guru Randhawa_ Millind Gaba",
    img: "music-34",
    src: "music-34"
  },
  {
    name: "Pasoori",
    artist: "Shae Gill, Ali Sethi",
    img: "music-35",
    src: "music-35"
  },
  {
    name: "Meray Pass Tum Ho",
    artist: "Rahat Fateh Ali Khan",
    img: "music-36",
    src: "music-36"
  },
  {
    name: "Suno Chanda Season 2",
    artist: "Farhan Saeed_ Damia Farooq _ Rimsha Khan",
    img: "music-37",
    src: "music-37"
  },
  {
    name: "Chupke Chupke ost",
    artist: " Nirmal Roy, Ali Zafar",
    img: "music-38",
    src: "music-38"
  },
  {
    name: "Latthay Di Chadar",
    artist: " Farhan Saeed, Qurat-ul-Ain Balouch",
    img: "music-39",
    src: "music-39"
  },
  {
    name: "Tanaa Banaa _ OST ",
    artist: "Amanat Ali",
    img: "music-40",
    src: "music-40"
  },
  {
    name: "mene tujhe dekha",
    artist: " Ali Zafar _ Jhoom",
    img: "music-41",
    src: "music-41"
  },
  {
    name: "Yaara Tere Warga",
    artist: "Jass Manak",
    img: "music-42",
    src: "music-42"
  },
  {
    name: "Prada",
    artist: "Jass Manak",
    img: "music-43",
    src: "music-43"
  },
  {
    name: "Lehanga",
    artist: "Jass Manak",
    img: "music-44",
    src: "music-44"
  },
  {
    name: "Butterfly",
    artist: "Jass Manak",
    img: "music-45",
    src: "music-45"
  },
  {
    name: "Teri Naar",
    artist: "Nikk",
    img: "music-46",
    src: "music-46"
  },
  {
    name: "Nakhre Tere",
    artist: "Nikk",
    img: "music-47",
    src: "music-47"
  },
  {
    name: "Relation",
    artist: "Nikk",
    img: "music-48",
    src: "music-48"
  },
  {
    name: "Badaami Rang",
    artist: "Nikk",
    img: "music-49",
    src: "music-49"
  },
  {
    name: "Amplifier",
    artist: "Imran Khan",
    img: "music-50",
    src: "music-50"
  },
  {
    name: "We Rollin",
    artist: "Shubh",
    img: "music-51",
    src: "music-51"
  },
  {
    name: "Aram Ata Hai",
    artist: "Azaan Sami Khan",
    img: "music-52",
    src: "music-52"
  },
  {
    name: "Bata Kya Liya Tune Mere Liye",
    artist: "Abrar Kashif",
    img: "music-53",
    src: "music-53"
  },
  {
    name: "Kali Kali Zulfoon Ke Phande Na Dalo",
    artist: "Nusrat Fateh Ali",
    img: "music-54",
    src: "music-54"
  },
  {
    name: "Ik Lamha",
    artist: "Azaan Sami Khan",
    img: "music-55",
    src: "music-55"
  },
  {
    name: "Kaisi Teri Khudgharzi",
    artist: "Rahat Fateh Ali Khan _ Sehar Gul _ Ali Imran_ Asim",
    img: "music-56",
    src: "music-56"
  },
  {
    name: "Tu thori dair aur thehr ja",
    artist: "Farhan Saeed",
    img: "music-57",
    src: "music-57"
  },
  {
    name: "Ek Dafa Tum Milo To Sanam",
    artist: "Nusrat Fateh Ali",
    img: "music-58",
    src: "music-58"
  },
  {
    name: "Maa",
    artist: "Shankar Mahadevan",
    img: "music-59",
    src: "music-59"
  },
  {
    name: "Khwahish",
    artist: "Munawar Faruqui",
    img: "music-60",
    src: "music-60"
  },
  {
    name: "Ik Mulaqaat",
    artist: "Altamash F_Palak M",
    img: "music-61",
    src: "music-61"
  },
  {
    name: "Sach Keh Rraha Hai Deewana",
    artist: "Mayank Maurya ",
    img: "music-62",
    src: "music-62"
  },
  {
    name: "Billo Nachi Mere Naal",
    artist: "Unique Lofi",
    img: "music-63",
    src: "music-63"
  },
  // like this paste it and remember to give comma after ending of this bracket }
  // {
  //   name: "Here is the music name",
  //   artist: "Here is the artist name",
  //   img: "image name here - remember img must be in .jpg formate and it's inside the images folder of this project folder",
  //   src: "music name here - remember img must be in .mp3 formate and it's inside the songs folder of this project folder"
  // }
];