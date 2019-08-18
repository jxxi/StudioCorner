import { createLocalVue, mount } from '@vue/test-utils';
import HelpExample from './Help.vue';
import { i18n } from '../../shared/plugins/i18n/i18n';

const localVue = createLocalVue();

describe('Help.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(HelpExample, {
      localVue,
      i18n,
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.vm.isSubmitDisabled).toBeTruthy();

    wrapper.setData({
      form: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@emample.com',
        street: 'Elmstreet',
        zipCode: '1337',
        city: 'Moetown',
        country: 'Tomorrowland',
        acceptTerms: true,
        newsletter: false,
      },
    });
    expect(wrapper.vm.isSubmitDisabled).toBeFalsy();

    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted('submit')).toBeTruthy();
  });
});
