import { devicesUrl, notifyUrl } from "../../api/endpoints";
import http, { cancelTokenSource } from "../../services";

export const Device = {
  device: () => http.get(devicesUrl, { cancelToken: cancelTokenSource.token }),
  notify: (data) => http.post(notifyUrl, data),
};
