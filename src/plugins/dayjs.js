import dayjs from 'dayjs';
import 'dayjs/locale/uk';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.locale('uk');

dayjs.extend(isBetween);