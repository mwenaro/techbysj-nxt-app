import RegistrationForm from "../(components)/templates/course_registration";


export const metadata = {
  title: 'Techbysj - Course Booking',
  description: 'Page for course booking or student registration',
};

export default function CourseBooking() {
  return (
    <div className="mt-20">
      <RegistrationForm />
    </div>
  );
}
