// Global Component
Vue.component("todo-item", {
	template: "<p>This is a child component</p>"
});

// 1. "todo-footer" 컴포넌트 전역 등록
// template: <p>This is another child global component</p>

Vue.component("todo-footer", {
	template: "<p>This is another child global component</p>"
});

var todoFooterCmp = {
	template: "<p>This is another child local component</p>"
}

var app = new Vue({
	el: "#app",
	data: {
		message: "This is a parent component"
	},

	// 2. "todo-footer" 컴포넌트 지역 등록
	components: {
		"todo-footer": todoFooterCmp
	}
});