import Badge from "../components/Badge";
import BaseButton from "../components/BaseButton";
import BaseAlert from "../components/BaseAlert";
import Card from "../components/Card";
import Icon from "../components/Icon";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
