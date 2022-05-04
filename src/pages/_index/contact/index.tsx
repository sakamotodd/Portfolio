import { ExclamationIcon, LockOpenIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { VFC } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormDTO } from '../../../interface/types';
import { useErrorMessage } from '../../../util/form/useErrorMessage';
import { useMail } from './useMail';

const Contact: VFC = () => {
  const openFlag = false;
  const { name, setName, message, mail, setMail, setMessage, send } = useMail();
  const { contactValidationSchema } = useErrorMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormDTO>({
    resolver: yupResolver(contactValidationSchema),
  });

  return (
    <div id="Contact" className="flex flex-col justify-center items-center h-full lg:min-h-screen">
      <div className="mt-8">
        <form
          onSubmit={handleSubmit(send)}
          className="p-12 mx-auto w-96 lg:w-[36rem] md:max-w-md bg-white rounded-md border"
        >
          <div className="mb-8">
            <h1 className="font-hiragino text-xl font-semibold text-center text-black">
              お問い合わせ
            </h1>
            <label className="text-xs text-black">お名前</label>
            <label className="text-xs text-red-700">※</label>
            <input
              type="text"
              name="name"
              id="name"
              {...register('name')}
              className={`${errors.name && 'errorInputForm'} inputForm`}
              placeholder="山田太郎"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="flex items-center mt-1 text-red-700">
                <ExclamationIcon className="w-5 h-5" />
                <p className="ml-1 text-xs">{errors.name?.message}</p>
              </div>
            )}
          </div>
          <div className="mb-8">
            <label className="text-xs text-black">Eメール</label>
            <label className="text-xs text-red-700">※</label>
            <input
              type="text"
              name="email"
              id="email"
              {...register('email')}
              className={`${errors.email && 'errorInputForm'} inputForm`}
              placeholder="メール"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            {errors.email && (
              <div className="flex items-center mt-1 text-red-700">
                <ExclamationIcon className="w-5 h-5" />
                <p className="ml-1 text-xs">{errors.email?.message}</p>
              </div>
            )}
          </div>
          <div className="mb-8">
            <label className="text-xs text-black">問い合わせ内容</label>
            <label className="text-xs text-red-700">※</label>
            <textarea
              className={`${errors.contact && 'errorInputForm'} inputForm`}
              rows={5}
              cols={33}
              name="contact"
              {...register('contact')}
              placeholder="その他"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            {errors.contact && (
              <div className="flex items-center mt-1 text-red-700">
                <ExclamationIcon className="w-5 h-5" />
                <p className="mt-2 text-sm text-red-500">{errors.contact?.message}</p>
              </div>
            )}
          </div>
          <button className="w-full btnForm">送信</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
