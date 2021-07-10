import { expect } from "@jest/globals";
import { shallowMount } from "@vue/test-utils";
import searchInput from "../searchInput.vue";

describe("Search input component", () => {
    test("should change icon color to green if input focused", async () => {
        const wrapper = shallowMount(searchInput, {
            attachTo: document.body,
        });
        const input = wrapper.find("input");
        await input.element.focus();
        await wrapper.vm.$nextTick();

        expect(wrapper.find(".search_input__icon").classes().includes("iconToGreen")).toBeTruthy();
        wrapper.destroy();
    });

    test("should remove icon green color on focusout", async () => {
        const wrapper = shallowMount(searchInput, {
            attachTo: document.body,
        });
        const input = wrapper.find("input");
        await input.element.focus();
        await wrapper.vm.$nextTick();

        expect(wrapper.find(".search_input__icon").classes().includes("iconToGreen")).toBeTruthy();

        await input.trigger("focusout");
        await wrapper.vm.$nextTick();
        expect(wrapper.find(".search_input__icon").classes().includes("iconToGreen")).toBeFalsy();

        wrapper.destroy();
    });
});
