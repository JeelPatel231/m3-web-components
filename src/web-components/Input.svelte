<svelte:options tag="m3-input-outlined"/>

<div class="component-wrapper body1" class:lefticon={lefticon} class:righticon={oncloseclick}>
    <span class="input-label-wrapper">
        <input spellcheck="false" type="text" required class="body1" bind:value={value}>
        {#if label}
            <span class="input-label">{label}</span>
        {/if}
        {#if lefticon}
            <span class="material-icons label-icon">{lefticon}</span>
        {/if}
        {#if oncloseclick && value!=""}
            <button on:click={oncloseclick} class="material-icons close-btn">highlight_off</button>
        {/if}
    </span>
</div>
{#if supptext}
<div class="support-text">{supptext}</div>
{/if}

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

*{
    font-family: 'Roboto';
    box-sizing: border-box;
}

.component-wrapper{
    width: inherit;
    margin-top: 0.4rem;
    color:var(--md-sys-color-on-background);
}
.input-label-wrapper{
    width: inherit;

    position: relative;
    height: 5.6rem;
}
.input-label-wrapper input{
    width: inherit;
    height: inherit;

    background: none;
    color:var(--md-sys-color-on-surface);
    border: 0.1rem solid var(--md-sys-color-outline);

    border-radius: 0.8rem;
    /* no highlights on focus */
    outline: none;
    font-size: 2.4rem;

    padding: 0 1.6rem;
}
.input-label-wrapper > .input-label{
    position: absolute;
    left: 1.6rem;
    width: fit-content;
    background: var(--md-sys-color-background);
    color: var(--md-sys-color-outline);
    font-size: 2.4rem;
    transition: 200ms ease;
    pointer-events: none;

    /* bottom when unfilled/unfocused */
    top: -2.2rem;
    line-height: 5rem;
}
.input-label-wrapper input:focus{
    border: 0.2rem solid var(--md-sys-color-primary);
}
.input-label-wrapper input:focus ~ .input-label{
    color: var(--md-sys-color-primary);
}
.input-label-wrapper input:valid ~ .input-label,
.input-label-wrapper input:focus ~ .input-label{
    left: 1.6rem;
    line-height: 1.6rem;
    font-size: 1.6rem;
    padding: 0 0.4rem;
    /* compensate for focused text-box highlighted border */
    top: -3.2rem;
}

/* CSS IF LEFT ICON EXISTS */

.label-icon{
    position: absolute;
    left: 0;
    line-height: 5.6rem;
    font-size: 2.4rem;
    padding-left: 1.2rem;
    color: var(--md-sys-color-outline);
}

.lefticon .input-label-wrapper > .input-label{
    left: 5.2rem; /* 12dp + 24dp + 16dp */
}
.lefticon input{
    padding-left: 5.2rem; /* 12dp + 24dp + 16dp */
}
.input-label-wrapper input:focus ~ .label-icon {
    color: var(--md-sys-color-primary);
}

/* CSS IF CLEAR BUTTON EXISTS */

.righticon input{
    padding-right: 5.2rem;
}

.close-btn{
    color: var(--md-sys-color-outline);
    position: absolute;
    right: 0;
    border: none;
    background: none;
    line-height: 5.6rem;
    cursor: pointer;
    padding-right: 1.2rem;
    outline: none;
    font-size: 2.4rem;
}
.input-label-wrapper input:focus ~ .close-btn{
    color: var(--md-sys-color-primary);
}

/* CSS FOR SUPPORTING TEXT */
.support-text{
    color: var(--md-sys-color-on-surface-variant);
    margin-left: 1.6rem;
    margin-top: 0.4rem;
    font-size: 1.2rem;
}

</style>

<script lang="ts">
// value getter and setter for input field
export let value:string = "";
// label aka placeholder
export let label:string = "";
// supporting text
export let supptext = "";
// left icon for search or anything
export let lefticon = "";
// a function setter to do anything on close click
// defaults to null, and if you wanna use it to clear value on input
// use it as follows : 
// el.oncloseclick = () => { el.value = "" }
// where `el` is the web-component in html 
export let oncloseclick: () => void = null;
</script>
