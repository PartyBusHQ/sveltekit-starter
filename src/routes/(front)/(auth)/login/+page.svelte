<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { fly} from 'svelte/transition';

  let ready: boolean = false;
  let email: string = '';
  let password: string = '';
  let errorMessage: HTMLParagraphElement;

  onMount(() => ready = true);

  async function signIn(): Promise<void>{
  };

</script>

{#if ready}
  <div class="relative mt-6">
    <svg viewBox="0 0 1208 1024" class="fixed -top-16 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
      <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604" ry="512" />
      <defs>
        <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
          <stop stop-color="#5800FF" />
          <stop offset="1" stop-color="#66347F" />
        </radialGradient>
      </defs>
    </svg>
  </div>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <a href="/">
        <img in:fly={{y: 100, delay: 400, duration: 1000}} class="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company">
      </a>  
    </div>
    <h1 in:fly={{y: 100, delay: 500, duration: 1500}} class="mt-4 text-4xl font-bold tracking-tight sm:text-3xl bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text text-center">Sign In</h1>
    <div in:fly={{y: 100, delay: 600, duration: 2000}} class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm bg-white bg-opacity-25 p-10 rounded-lg">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
          <div class="mt-2">
            <input bind:value={email} id="email" name="email" type="email" autocomplete="email" required class="block w-full px-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
            <div class="text-sm">
            </div>
          </div>
          <div class="mt-2">
            <input bind:value={password} id="password" name="password" type="password" autocomplete="current-password" required class="block bg-white/5 w-full px-2 rounded-md border- py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="mt-4">
          <button on:click={signIn} type="submit" class="flex w-full justify-center rounded-md bg-white bg-opacity-25 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
        </div>
       <p bind:this={errorMessage} class="mt-10 text-center text-sm text-red-400 italic"></p>
    </div>
  </div>
{/if}
