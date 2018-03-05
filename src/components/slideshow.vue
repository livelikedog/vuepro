<template>
	<div class="slide-show" @mouseenter="clearInv" @mouseleave="runInv">
		<div class="slide-img">
			<a :href="slides[nowIndex].href">
				<transition name='slide-trans'>
					<img :src="slides[nowIndex].src" v-if="isShow" />
				</transition>
				<transition name="slide-trans-old">
					<img :src="slides[nowIndex].src" v-if="!isShow" />
				</transition>
			</a>
		</div>
		<h2>{{slides[nowIndex].title}}</h2>
		<ul class="slide-pages">
			<li @click="goTo(preIndex)">&lt;</li>
			<li v-for="(item,index) in slides" @click="goTo(index)">
				<a :class="{on:index===nowIndex}">{{index+1}}</a>
			</li>
			<li @click="goTo(nextIndex)">&gt;</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			slides:{
				type:Array,
				default:[]
			},
			inv:{
				type:Number,
				default:2000
			}
		},
		data(){
			return {
				nowIndex:0,
				isShow:true
			}
		},
		methods:{
			goTo(index){
				this.isShow=false;
				setTimeout( ()=>{
					this.isShow=true;
					this.nowIndex=index;
					this.$emit('onchange',index)
				},10)				
			},
			runInv(){
				this.invId=setInterval(()=>{
					this.goTo(this.nextIndex)
				},this.inv)
			},
			clearInv(){
				clearInterval(this.invId)
			}
		},
		computed:{
			preIndex(){
				if(this.nowIndex===0){
					return this.slides.length-1;
				}else{
					return this.nowIndex-1;
				}
			},
			nextIndex(){
				if(this.nowIndex===this.slides.length-1){
					return 0;
				}else{
					return this.nowIndex+1;
				}
			}
		},
		mounted(){
			this.runInv();
		}
	}
</script>

<style scoped>
.slide-trans-enter-active{
	transition:all 1s;
}
.slide-trans-enter{
	transform:translateX(900px);
}
.slide-trans-old-leave-active{
	transform:translateX(-900px);
	transition:all 1s;
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>