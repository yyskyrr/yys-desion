<template>
  <div id="app">
    <h3>输入框</h3>
    <div class="yys-input">
      <input type="text" placeholder="用户名" />
    </div>

    <h3>禁用</h3>
    <div class="yys-input disabled">
      <input type="text" disabled placeholder="用户名" />
    </div>

    <h3>可清空</h3>
    <div class="yys-input">
      <input type="text" placeholder="用户名" />
      <span class="suffix">
        <i class="fa fa-times-circle" />
      </span>
    </div>

    <h3>图标</h3>
    <div class="yys-input">
      <span class="prefix">
        <i class="fa fa-user"></i>
      </span>
      <input type="text" placeholder="用户名" />
    </div>
    <br />

    <div class="yys-input">
      <input type="text" placeholder="用户名" />
      <span class="suffix">
        <i class="fa fa-user"></i>
      </span>
    </div>

    <h3>长文本输入</h3>

    <div class="yys-input">
      <textarea cols="60" rows="4"></textarea>
    </div>

    <h3>组合</h3>

    <div class="yys-input">
      <div class="yys-btn">确认</div>
      <input type="text" class="prepend" placeholder="用户名" />
    </div>
    <br />
    <div class="yys-input">
      <input type="text" class="append" placeholder="用户名" />
      <div class="yys-btn">确认</div>
    </div>

    <h3>大小</h3>

    <div class="yys-input">
      <input type="text" class="large" placeholder="用户名" />
    </div>
    <br />
    <div class="yys-input">
      <input type="text" placeholder="用户名" />
    </div>
    <br />
    <div class="yys-input">
      <input type="text" class="small" placeholder="用户名" />
    </div>

    <h3>100%宽</h3>

    <div class="yys-input">
      <input type="text" class="full" placeholder="用户名" />
    </div>

    <table class="yys-table celled" style="width: 100%">
      <thead>
        <tr>
          <th style="width: auto"><div class="cell">参数</div></th>
          <th style="width: auto"><div class="cell">说明</div></th>
          <th style="width: auto"><div class="cell">类型</div></th>
          <!---->
        </tr>
      </thead>
      <tbody class="">
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              textarea
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              长文本输入框
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              Boolean
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              prepend
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              前置元素，修改前置元素和输入框的样式，达到组合效果
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              String
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              prefix
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              前置图标容器
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              String
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              icon
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              字体图标, 例: icon-trash
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              IconfontClassName
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              type
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              输入框类型
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              InputType
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              size
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              输入框大小 [large, small]
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              SizeEnum
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              full
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              输入框100%宽
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              Boolean
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              cols
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              输入框为textarea时，列数
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              Number
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              rows
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              输入框为textarea时，行数
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              Number
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              clearable
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              清除图标容器
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              String
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              prefix
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              后置图标容器
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              String
            </div>
            <!---->
          </td>
        </tr>
        <tr class="">
          <td style="width: auto">
            <div class="cell">
              <!---->
              append
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              后置元素，修改后置元素和输入框的样式，达到组合效果
            </div>
            <!---->
          </td>
          <td style="width: auto">
            <div class="cell">
              <!---->
              String
            </div>
            <!---->
          </td>
        </tr>
      </tbody>
      <!---->
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {},
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
