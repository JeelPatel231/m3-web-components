<svelte:options tag="m3-switch" immutable={true}/>

<label>
    <input bind:checked={checked} type="checkbox">
    <span before={before} after={after} class="toggle" class:before-icon={!!before} />
    <!--    ^ unchecked icon       ^ checked icon           ^ add the left bigger icon class if it exists-->
</label>

<style>
*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

input[type=checkbox]{
    display: none;
}
/* toggle CONTAINER basic properties */
.toggle{
    height: 3.2rem;
    width: 5.2rem;
    border: 0.2rem solid var(--md-sys-color-outline);
    background-color: var(--md-sys-color-background);
    border-radius: 1.6rem;
    position: relative;
    display: flex;
    align-items: center;
}
/* slidable circle */
.toggle::after{
    content: attr(before);
    position: relative;
    transition: 100ms ease;
    font-size: 1.6rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--md-sys-color-outline);
    color: var(--md-sys-color-background);

    height: 1.6rem;
    width: 1.6rem;
    border-radius: 100%;
    font-family: "Material Icons";

    left: 0;
    transform: translateX(0.4rem);
}
/* make the left side with icon bigger if the left icon exists */
.toggle.before-icon::after{
    height: 2.4rem;
    width: 2.4rem;
    transform: translateX(0.2rem);
}

/* slidable circle on checked */
input[type=checkbox]:checked ~ .toggle::after{
    background-color: var(--md-sys-color-background);
    color: var(--md-sys-color-on-background);
    border: 0.2rem solid var(--md-sys-color-primary);
    content: attr(after);
    width: 2.8rem;
    height: 2.8rem;
    left: 100%;
    transform: translateX(-100%);
}
/* toggle container on checked */
input[type=checkbox]:checked ~ .toggle{
    background-color: var(--md-sys-color-primary);
    border: 2px solid var(--md-sys-color-primary);
}
</style>

<script lang="ts">
export let checked:boolean = false;
export let after:string = "";
export let before:string = "";
</script>