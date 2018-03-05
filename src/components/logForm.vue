<template>
	<div class="login-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-label">用户名：</span>
				<div class="g-form-input">
					<input type="text" v-model="usernameModel" placeholder="请输入用户名" />
				</div>
				<span class="g-form-error">{{userErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码：</span>
				<div class="g-form-input">
					<input type="password" v-model="passwordModel" placeholder="请输入密码"/>
				</div>
				<span class="g-form-error">{{passwordErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<div class="g-form-btn">
					<a class="button" @click="onLogin">登陆</a>
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
				errorText:'',
				usernameModel:'',
				passwordModel:''
			}
		},
		computed:{
			userErrors(){
				let errorText,status;
				if(!/@/g.test(this.usernameModel)){
					status=false;
					errorText='需要包含@'
				}
				else{
					status=true;
					errorText='';
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
				if(!/^\w{6,16}$/g.test(this.passwordModel)){
					status=false;
					errorText='密码长度在6-16位之间'
				}else{
					status=true;
					errorText='';
				}
				if(!this.passwordFlag){
					errorText='';
					this.passwordFlag=true;
				}
				return {
					status,
					errorText
				}
			}
		},
		methods:{
			onLogin(){
				if(!this.userErrors.status || !this.passwordErrors.status){
					this.errorText='请输入正确的用户名和密码';
				}
				else{
					this.errorText='';
					this.$emit('has-log',[this.usernameModel,this.passwordModel])
				}
			}
		}
	}
</script>

<style>
</style>