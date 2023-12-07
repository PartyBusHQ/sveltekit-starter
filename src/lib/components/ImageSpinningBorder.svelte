<!-- The image has to be a square -->

<script lang="ts">
  export let img: string = "";
</script>

<div class="image-wrapper relative w-3/4 md:w-1/3 h-auto mx-auto p-4 rounded-full">
  <img src="{img}" alt="" class="h-full w-full object-cover rounded-full" />
</div>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.image-wrapper::before {
		content: '';
		position: absolute;
		top: -2px; 
		left: -2px; 
		width: calc(100% + 4px);
		height: calc(100% + 4px); 
		border: 4px dashed #aaabef;
		border-radius: 50%;
		animation: spin 100s linear infinite;
	}

	.image-wrapper img {
		position: relative;
		z-index: 1;
	}
</style>
