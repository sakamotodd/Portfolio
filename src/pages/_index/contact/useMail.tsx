import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

export const useMail = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const send = useCallback(() => {
    sendAPI();
    setName('');
    setMail('');
    setMessage('');
  }, []);

  const sendAPI = async () => {
    await fetch('/api/mail', {
      method: 'POST',
      body: `
名前
${name}

お問い合わせ内容
${message}
`,
    });
    alert('送信しました。');
    router.push('/');
  };

  return {
    mail,
    setMail,
    name,
    setName,
    message,
    setMessage,
    send,
  };
};
