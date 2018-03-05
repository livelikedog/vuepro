<template>
	<div class="login-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-label">用户名：</span>
				<div class="g-form-input">
					<input type="text" v-model="setUsername" placeholder="请输入用户名"/>
				</div>
				<span class="g-form-error">{{userErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码：</span>
				<div class="g-form-input">
					<input type="password" v-model="setPassword" placeholder="请输入密码"/>
				</div>
				<span class="g-form-error">{{passwordErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">确认密码：</span>
				<div class="g-form-input">
					<input type="password" v-model="setPasswordAgain" placeholder="请再次输入密码"/>
				</div>
				<span class="g-form-error">{{passwordConErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<div class="g-form-btn">
					<a class="button" @click="onReg">注册</a>
				</div>
			</div>
			<p class="g-form-error">{{errorText}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				setUsername:'',
				setPassword:'',
				setPasswordAgain:'',
				errorText:''
			}
		},
		computed:{
			userErrors(){
				let errorText,status;
				if(!/@/g.test(this.setUsername)){
					status=false;
					errorText="用户名需要包含@";
				}else{
					status=true;
					errorText="";
				}
				if(!this.userFlag){
					errorText='';
					this.userFlag=true;
				}
				return {
					status,
					errorText
				}
			},
			passwordErrors(){
				let errorText,status;
				if(!/^\w{6,16}$/g.test(this.setPassword)){
					status=false;
					errorText="密码长度在6-16位之间";
				}else{
					status=true;
					errorText="";
				}
				if(!this.passwordFlag){
					errorText='';
					this.passwordFlag=true;
				}
				return {
					status,
					errorText
				}
			},
			passwordConErrors(){
				let errorText,status;
				if(this.setPassword!==this.setPasswordAgain){
					status=false;
					errorText="请输入与上面相同的密码";
				}else{
					status=true;
					errorText="";
				}
				if(this.setPasswordAgain===''){
					errorText='';
				}
				return {
					status,
					errorText
				}
			}			
		},
		methods:{
			onReg(){
				if(!this.userErrors.status || !this.passwordErrors.status || !this.passwordConErrors.status){
					this.errorText='请输入正确的注册信息';
				}
				else{
					this.errorText='';
					this.$emit("has-reg",this.setUsername)
				}
			}
		}
	}
</script>

<style>
</style>