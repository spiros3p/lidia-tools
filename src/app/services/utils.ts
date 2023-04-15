export class Utils {
  static cleanUpPageTitle(title: string) {
    return title.split('/')[1].split('-').join(' ');
  }
}
