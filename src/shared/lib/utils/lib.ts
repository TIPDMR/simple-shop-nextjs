import DOMPurify from 'isomorphic-dompurify';

export const cleanHtml = (text: string) =>
  DOMPurify.sanitize(text, { USE_PROFILES: { html: true } });

/**
 * Форматирование номера телефона
 * "+7 (913) 055 55-55 => 79130555555
 * @param phoneNumber
 */
export const formatPhoneNumber = (phoneNumber: string): string | null => {
  // Удаление всех символов, кроме цифр
  const cleaned = phoneNumber.replace(/\D/g, '');

  // Проверка, является ли номер телефона валидным
  if (cleaned.length === 11 && cleaned.startsWith('7')) {
    // Если номер телефона начинается с "7" и длина равна 11, возвращаем его
    return cleaned;
  } else if (cleaned.length === 10) {
    // Если номер телефона не начинается с "7", добавляем "7" в начало
    return '7' + cleaned;
  } else {
    // Если номер телефона не соответствует ожидаемым форматам, возвращаем null
    return null;
  }
};
