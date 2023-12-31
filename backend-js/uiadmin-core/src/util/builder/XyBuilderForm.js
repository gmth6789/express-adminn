class XyBuilderForm {

  constructor() {
      this.data = {}
  }

  $formType = {
      'tabs': 'สวิตช์แท็บ',
      'hidden': 'องค์ประกอบที่ซ่อนอยู่',
      'static': 'ข้อความคงที่',
      'link': 'ลิ้งค์กระโดด',
      'text': 'ข้อความ',
      'password': 'รหัสผ่าน',
      'url': 'URL',
      'email': 'อีเมล์',
      'date': 'วันที่',
      'number': 'ตัวเลข',
      'digit': 'หมายเลขจุดลอยตัว',
      'tel': 'เบอร์โทร',
      'textarea': 'ข้อความหลายบรรทัด',
      'array': '自定义数组',
      'select': '下拉框',
      'selects': '下拉框多选',
      'radio': '单选框',
      'checkbox': '多选框',
      'switch': '开关',
      'slider': '滑块',
      'tags': '标签',
      'datepicker': '日期',
      'timepicker': '时刻',
      'datetimepicker': '时间',
      'daterangepicker': '日期区间',
      'datetimerangepicker': '时间区间',
      'rate': '星级评分',
      'cascader': '级联选择',
      'region': '省市区联动',
      'colorpicker': '颜色选择器',
      'image': '单图上传',
      'imageflex': '单图列表',
      'images': '多图上传',
      'file': '单文件上传',
      'files': '多文件上传',
      'poster': '分享海报',
      'selectlist': '列表选择器',
      'checkboxtree': '树状表格复选',
      'markdown': 'Markdown',
      'html': 'ข้อความที่หลากหลาย',
      'tinymce': 'ข้อความ RichMCE ของ TinyMCE',
      'sku': 'ข้อมูลจำเพาะของผลิตภัณฑ์',
      'fee': 'เทมเพลตการขนส่งสินค้า'
  };


  init() {
      this.data = {
          'alertList': {
              'top': [],
              'bottom': []
          },
          'formMethod': 'post',
          'formCols': [], // 表单项目分栏
          'formGroups': [], // 表单项目分组
          'formItems': [],
          'formValues': [],
          'formRules': [],
          'formTabs': [],
          'config': {
              'continue': false, // 显示继续添加
              'itemDefaultPosition': '',
              'submitButtonTitle': '确认',
              'cancelButtonTitle': '取消',
              'footerButtonLength': '120px',
              'labelPosition': 'left',
              'labelWidth': '100px',
              'defaultUploadDriver': "",
              'defaultUploadAction': '/api/v1/core/upload/upload',
              'defaultUploadMaxSize': 512
          }
      };
      return this;
  }

  setConfig($name, $value) {
      this.data['config'][$name] = $value;
      return this;
  }


  addAlertItem($layer, $item) {
      this.data['alertList'][$layer].push($item);
      return this;
  }


  addFormTab($tab) {
      this.data['formTabs'].push($tab);
      return this;
  }


  setFormMethod($method = 'post') {
      this.data['formMethod'] = $method;
      return this;
  }

  getFormItem(
      $name,
      $title,
      $type = 'text',
      $value = '' ,
      $extra = []
  ) {
      let $item = {};
      $item['name'] = $name;
      $item['title'] = $title;
      $item['type'] = $type;
      $item['value'] = $value;
      $item['extra'] = $extra;
      return $item;
  }
  

  addFormCol(
      $name,
      $span = [],
      $itemList = [],
      $extra = []
  ) {
      this.data['formCols'].push({
          'name': $name,
          'span': $span,
          'itemList': $itemList,
          'extra': $extra
      });
      return this;
  }


  addFormGroup(
      $name,
      $title,
      $itemList = [],
      $extra = []
  ) {
      this.data['formGroups'].push({
          'name': $name,
          'title': $title,
          'itemList': $itemList,
          'extra': $extra
      });
      return this;
  }


  addFormItem(
      $name,
      $title,
      $type = 'text',
      $value = '' ,
      $extra = []
  ) {
      let $item = this.getFormItem($name, $title, $type, $value, $extra);
      if ((this.data['formTabs']).length > 0) {
          this.data['formTabs'][(this.data['formTabs']).length - 1]['formItems'].push($item);
          this.data['formTabs'][(this.data['formTabs']).length - 1]['formRules']['default'] = [];
      } else {
          this.data['formItems'].push($item);
          // this.data['formRules']['default'] = [];
      }
      return this;
  }


  addFormRule($name, $rule){
      if ((this.data['formTabs']).length > 0) {
          this.data['formTabs'][(this.data['formTabs']).length - 1]['formRules'][$name] = $rule;
      } else {
          this.data['formRules'][$name] = $rule;
      }
      return this;
  }


  setFormValues($data = []) {
      this.data['itemValues'] = $data;
      return this;
  }

 getData() {
      return this.data;
  }
}

module.exports = XyBuilderForm
