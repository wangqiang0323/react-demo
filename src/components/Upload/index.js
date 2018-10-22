import React from 'react'
import './index.css'

class Upload extends React.Component {
  state = {
    imageSrc: []
  }

  /*
    图片压缩
    参数： img (img为图片的Data URL, data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1IAAASuCAYAAADI0RjrAAAMJGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdUk8kWnr8kISGhBSIgJfQ......)
                                    'data:'为前缀，'image/png'为mediatype 'base64'
  */
  compress (img){
    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    let width = img.width
    let height = img.height
    canvas.width = width
    canvas.height = height

    context.fillStyle = '#fff'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
    let base64Data = canvas.toDataURL('image/jpeg', 0.4) //压缩图片 只对image/jpeg或image/webp有效
    canvas = context = null
    img = null
    return base64Data
  }

  // 注意b64Data必须把前面的类似于“data:image/png;base64,"的字串截掉
  // contentType指图片类型，比如：image/png， image/jpeg 等等
  b64ToBlob = (b64Data, contentType) => {
    contentType = contentType || ''

    var byteCharacters = atob(b64Data) // 解码base64数据为二进制字符串
    var buffer = [] // 注意，Blob第一个参数必须是一个数组

    // 类型数组用来处理二进制文件
    let aBuffer = new ArrayBuffer(byteCharacters.length)
    let uBuffer = new Uint8Array(aBuffer)
    for (let i = 0; i < byteCharacters.length; i++) {
      uBuffer[i] = byteCharacters.charCodeAt(i)  // 得到Unicode编码，存进类型数组
    }
    buffer.push(uBuffer)

    let blob = new Blob(buffer, { // 生成一个二进制文件
      type: contentType
    })

    return blob
  }

  onchange  = (e) => {
    let file = e.target.files[0]
    if (!file) return
    if (!file.type.match('image.*')) { // 不是图片则返回
        alert('只能上传图片');
        return false;
    }


    // URL.createObjectURL()的性能要比使用FileReader高很多，如果只是单纯想要预览图片，那么使用URL.createObjectURL()比较好。
    let RURL = URL || window.URL || window.webkitURL
    let url = RURL.createObjectURL(file)
    this.setState({imageSrc: this.state.imageSrc.concat([url])})  // 预览

    // previewer
    let reader = new FileReader()
    reader.onload = (ev) => {
      let image = new Image()
      image.src = ev.target.result
      image.onload =  () => {
        var compressUrl = this.compress(image) // 压缩图片
        var blob = this.b64ToBlob(compressUrl.split(',')[1], 'image/jpeg') // 压缩成jpeg格式
        var form_data = new FormData()
        form_data.append('file', blob)
        // ajax here
      }
      this.setState({imageSrc: this.state.imageSrc.concat([image.src])}) // 预览
    }
    reader.readAsDataURL(file)
  }

  render() {
    return (
      <div className={this.props.className || 'upload'}>
        <div className="btn btn-primary">{this.props.btnText}
          <input type="file" onChange={this.onchange}></input>
        </div>
        <div className="previewer">
          {this.state.imageSrc.map((item, index) => {
            return <img src={item} key={index} alt=""/>
          })}
        </div>
      </div>
    )
  }
}

export default Upload
