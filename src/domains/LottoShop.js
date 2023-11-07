import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_CONFIG } from "../constants.js";

class LottoShop {
  #generateLotto() {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(lottoNumber);
  }

  sellLottos(user, count) {
    for (let i = 0; i < count; i++) {
      const lotto = this.#generateLotto();
      user.buyLotto(lotto, LOTTO_CONFIG.price);
    }
  }

  getLottoPrice() {
    return LOTTO_CONFIG.price;
  }
}

export default LottoShop;
