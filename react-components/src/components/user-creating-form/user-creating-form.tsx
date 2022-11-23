import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import TextInput from 'components/form-elements/text-input/text-input';
import DateInput from 'components/form-elements/date-input/date-input';
import Select from 'components/form-elements/select/select';
import Switcher from 'components/form-elements/switcher/switcher';
import Checkbox from 'components/form-elements/checkbox/checkbox';
import FileUpload from 'components/form-elements/file-upload/file-upload';
import { IUserCard } from 'share/types';
import { UserCreatingFormProps } from './types';
import { IUserCreatingForm } from 'share/types';
import mockText from 'mocks/text';

const initialState: IUserCard = {
  name: '',
  birthday: '',
  salary: '',
  gender: '',
  mailing: true,
  avatarPath: '',
};

const UserCreatingForm = (props: UserCreatingFormProps) => {
  const [user, setUser] = useState(initialState);
  const [avatarPath, setAvatarPath] = useState('');
  const { onForm } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserCreatingForm>();

  const PrepareUserPhoto = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAvatarPath(reader.result as string);
    };
  };

  useEffect(() => {
    if (avatarPath) {
      user.avatarPath = avatarPath;
      onForm(user);
      setUser(initialState);
      setAvatarPath('');
    }
  }, [user, avatarPath, onForm]);

  const onSubmit: SubmitHandler<IUserCreatingForm> = (data) => {
    const { name, birthday, salary, gender, mailing, avatarPath } = data;
    setUser({
      name: name,
      birthday: birthday.split('-').reverse().join('.'),
      salary: salary,
      gender: gender,
      mailing: mailing,
    });
    PrepareUserPhoto(avatarPath[0]);
    reset();
  };

  return (
    <form className="create-user-form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        name={'name'}
        id={'name-user-form'}
        labelType={mockText.labelUserName}
        placeholderText={mockText.placeholderUserName}
        errors={errors}
        register={register}
        validationSchema={{
          required: 'Input your name',
          minLength: {
            value: 2,
            message: 'minimum of 2 characters',
          },
          maxLength: {
            value: 10,
            message: 'maximum of 10 characters',
          },
        }}
        required
      />
      <DateInput
        type="date"
        name={'birthday'}
        id={'b-day-user-form'}
        labelType={mockText.labelUserBirthday}
        defaultValue="2000-01-01"
        minDate="1922-01-01"
        maxDate="2022-01-01"
        register={register}
        required
      />
      <Select
        labelType={mockText.labelUserSalary}
        id={'salary-user-form'}
        name={'salary'}
        register={register}
        required
      >
        <React.Fragment>
          <option disabled>Please choose an option</option>
          <option value="less than 100$">less than 100$</option>
          <option value="100-199$">100-199$</option>
          <option value="200-299$">200-299$</option>
          <option value="300-399$">300-399$</option>
          <option value="400-499$">400-499$</option>
          <option value="over 500$">over 500$</option>
        </React.Fragment>
      </Select>

      <Switcher
        switcherType={mockText.switcherGender}
        optionOne={mockText.switcherGenderMale}
        optionTwo={mockText.switcherGenderFemale}
        idRadioOne={'radio-male-user-form'}
        idRadioTwo={'radio-female-user-form'}
        name={'gender'}
        register={register}
        required={false}
      />
      <Checkbox
        labelType={mockText.labelUserMailing}
        id={'mailing-user-form'}
        name={'mailing'}
        register={register}
        required={false}
      />
      <FileUpload
        type="file"
        labelType={mockText.labelFileUpload}
        id={'avatar-user-form'}
        name={'avatarPath'}
        register={register}
        errors={errors}
        validationSchema={{
          required: 'Add photo',
        }}
        required
      />
      <input className="create-user-button" type="submit" value={mockText.createUserButton} />
    </form>
  );
};

export default UserCreatingForm;
