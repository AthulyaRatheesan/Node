const express=require("express")
const hello=require("../controller/testcontroll")
const newcontroller=require("../controller/newcontroller")
const array=require("../controller/array")
const object=require("../controller/object")
const postreq=require("../controller/array")
const post1 = require("../controller/post")
const filter = require("../controller/array")
const filter1 = require("../controller/array")
const filter2 = require("../controller/array")
const combination = require("../controller/array")
const abc = require("../demo/arrayss")
const demo = require("../demo/dem")
const ab = require("../demo/arrayss")
const abcd = require("../demo/arrayss")
const abcde = require("../demo/arrayss")
const abcdef = require("../demo/arrayss")





const router=express.Router()




// router.route("/").get(hello)

// router.route("/newcontroller").get(newcontroller)
// router.route("/array").get(array)
// router.route("/object").get(object)
// router.route("/postreq").post(postreq)
// router.route("/post1").post(post1)
// router.route("/:id").get(filter)                         //filter:  dynamic path set cheyyan
// router.route("/:age").get(filter1)
// router.route("/:name").get(filter2)
// router.route("/:id/:name/:age").get(combination)
//router.route("/demo").get(demo)
router.route("/arr").get(abc)
// router.route("/:id").get(ab)
// router.route("/:age").get(abcd)
// router.route("/:name").get(abcde)
router.route("/:email").get(abcdef)


module.exports=router;
