let img = []
img[0] = require("../img/mentor/1.jpg")
img[1] = require("../img/mentor/2.jpg")
img[2] = require("../img/mentor/3.jpg")
img[3] = require("../img/mentor/4.jpg")

const mentor_arr = [];
const names_arr = ["Anand Kumar", "Dilip Kumar", "Vivek Tiwary", "Kanhaiya"];
const role_arr = ["a", "b", "c", "d"];

for (let i = 0; i < 4; i++) {

    mentor_arr.push(
        {
            "file": img[i],
            "name": names_arr[i],
            "role": role_arr[i]
        }
    )
}

export default mentor_arr;