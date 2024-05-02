Congrats you are loged in!

<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    let form: HTMLFormElement;
</script>


<Button variant="secondary" class="hover:bg-secondary-foreground hover:text-secondary" on:click={() => form.submit()}>Logout</Button>
<form bind:this={form} action="/logout" method="POST" class="hidden"></form>