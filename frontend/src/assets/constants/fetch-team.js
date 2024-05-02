let img = []
img[0] = require("../img/team/1.jpg")
img[1] = require("../img/team/2.jpg")
img[2] = require("../img/team/3.jpg")
img[3] = require("../img/team/4.jpg")
img[4] = require("../img/team/5.jpg")
img[5] = require("../img/team/6.jpg")

const team_arr = [];
const names_arr = ["Rana Vivek Singh", "Aayushi Singh", "Shashank M", "Vaibhav Kumar", "Somala Jayesh", "Venkatesh N P"];
const role_arr = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < 6; i++) {

    team_arr.push(
        {
            "file": img[i],
            "name": names_arr[i],
            "role": role_arr[i]
        }
    )
}

export default team_arr;