export class Utils {
  static cleanUpPageTitle(title: string) {
    return (title.split('/')[1] || title.split('/')[0]).split('-').join(' ');
  }
}
