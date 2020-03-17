!function () {
    function wirteCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn()
            }
        }, 0)
    }
    let code = `
/*
 *  首先准备皮卡丘的皮
 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all .5s;
}
*::after {
  box-sizing: border-box;
}
*::before {
  box-sizing: border-box;
}
.preview {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 227, 51);
}
.wrapper {
  width: 100%;
  height: 195px;
  position: relative;
}
/*
 *  接下来，话皮卡丘的眼睛
 */
.nose {
  width: 0px;
  height: 0px;
  border: 11px solid;
  border-width: 10px 12px;
  border-radius: 50%;
  border-color: black transparent transparent transparent;
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);
}
.eye {
  width: 49px;
  height: 49px;
  background-color: #2e2e2e;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000;
}
/*
 *  眼睛里面的眼珠
 */
.eye::after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  top: -1px;
  border: 2px solid #000;
}
/*
 *  左眼在左边
 */
.eye.left {
  right: 50%;
  margin-right: 90px;
}
/*
 *  右眼在右边
 */
.eye.right {
  left: 50%;
  margin-left: 90px;
}
/* 
 *  然后画皮卡丘的脸
 */
.dimple {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 2px solid #000;
  position: absolute;
  top: 85px;
  background-color: #fc0d1c;
}
/*
 *  将脸放到正确的位置
 */
.dimple.left {
  right: 50%;
  margin-right: 116px;
}
.dimple.right {
  left: 50%;
  margin-left: 116px;
}
/*
 *  上嘴唇
 */
.upperLip {
  height: 27px;
  width: 82px;
  border: 3px solid #000;
  top: 40px;
  right: 50%;
  background-color: rgb(255, 227, 51);
}
.upperLip.left {
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  position: absolute;
  transform: rotate(-24deg);
}
.upperLip.right {
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  position: absolute;
  transform: rotate(24deg);
  margin-right: -82px;
}
/*
 *  下嘴唇
 */
.lowerLip-warpper {
  bottom: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  
  height: 146px;
  overflow: hidden;
  width: 300px;
}
.lowerLip {
  width: 300px;
  height: 3500px;
  background-color: rgb(154, 5, 20);
  border-radius: 200px/2000px;
  border: 2px solid #000;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 *  舌头
 */
.lowerLip::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -40px;
  width: 150px;
  height: 150px;
  background-color: rgb(253, 74, 99);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 80%;
}
    `
    wirteCode('', code)
}()