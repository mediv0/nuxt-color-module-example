import { shallowMount } from "@vue/test-utils";
import { expect } from "@jest/globals";
import sectionDescriptor from "../sectionDescriptor.vue";

describe("section descriptor", () => {
    test("should render with givern text", () => {
        const wrapper = shallowMount(sectionDescriptor, {
            propsData: {
                title: "random test title",
            },
        });
        expect(wrapper.find(".descriptor__content__title").text()).toBe("random test title");
    });

    test("should emit onClick event", async () => {
        const wrapper = shallowMount(sectionDescriptor, {
            props: {
                title: "test",
            },
        });

        await wrapper.find("p").trigger("click");

        expect(wrapper.emitted().onClick).toBeTruthy();
    });
});
