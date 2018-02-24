<template>
	<q-page padding>
		<div class="row gutter-md">
			<div class="col-12">
				<q-btn rounded @click="showModal = true" label="Open modal" />
			</div>
			<div class="col-12">
				<strong>Start</strong>
				<p>
					To see the problem, run the app on iOS simulator/device and then focus some input.<br />
					When the input is focused, the device keyboard is open and try scroll the page while the keyboard is open.<br />
					Scroll down and up, the header/footer will disappear or fly around the screen.<br />
					When you blur the input everything revert no normal.
				</p>
			</div>
			<div class="col-12">
				<q-input float-label="Text" v-model="text"/>
			</div>
			<div class="col-6">
				<q-input float-label="Text" v-model="text"/>
			</div>
			<div class="col-6">
				<q-input float-label="Text" v-model="text"/>
			</div>
			<div class="col-12">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur natus quis voluptas! Alias aliquam consequatur delectus dolorem eaque est incidunt nulla recusandae sint totam! Aliquid consequatur facilis nesciunt perferendis reprehenderit.</p>
			</div>
			<div class="col-12">
				<q-input float-label="Text" v-model="text"/>
			</div>
			<div class="col-6">
				<q-input float-label="Text" v-model="text"/>
			</div>
			<div class="col-6">
				<q-input float-label="Text" v-model="text"/>
			</div>
			<div class="col-12">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem dolorem earum facilis, id illum ipsum praesentium provident suscipit ut, vitae voluptatibus. Aliquid est fuga necessitatibus nostrum porro, quia vitae!</p>
			</div>
			<div class="col-12">
				<q-input float-label="Text" v-model="text"/>
			</div>
			<div class="col-12">
				<strong>The End</strong>
			</div>
		</div>
		<q-modal v-model="showModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
			<q-modal-layout>
				<q-toolbar slot="header">
					<q-btn
							flat
							round
							dense
							v-close-overlay
							icon="keyboard_arrow_left"
					/>
					<q-toolbar-title>
						Header
					</q-toolbar-title>
				</q-toolbar>

				<q-toolbar slot="header">
					<q-search class="full-width" inverted v-model="search" color="none" />
				</q-toolbar>

				<q-toolbar slot="footer">
					<q-toolbar-title>
						Footer
					</q-toolbar-title>
				</q-toolbar>

				<div class="layout-padding">
					<div class="row gutter-md">
						<div class="col-12">
							<q-input float-label="Text" v-model="text"/>
						</div>
						<div class="col-12">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur natus quis voluptas! Alias aliquam consequatur delectus dolorem eaque est incidunt nulla recusandae sint totam! Aliquid consequatur facilis nesciunt perferendis reprehenderit.</p>
						</div>
					</div>
				</div>
			</q-modal-layout>
		</q-modal>
	</q-page>
</template>

<style>
</style>

<script>
	export default {
		name: 'PageIndex',
		data(){
			return {
				text: '',
				search: '',
				showModal: false
			}
		}
	}
</script>
