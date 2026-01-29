import React, { useState } from 'react';
import { PlanType, TrainingPreference } from './types';
import { useAuth } from './hooks/useAuth';
import { useFitnessPlan } from './hooks/useFitnessPlan';
import { useCustomBuilder } from './hooks/useCustomBuilder';
import { useFormState } from './hooks/useFormState';

// Components & Pages
import Layout from './components/common/Layout';
import Home from './pages/Home';
import PlanForm from './pages/PlanForm';
import PlanView from './pages/PlanView';
import History from './pages/History';
import CustomBuilder from './pages/CustomBuilder';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'form' | 'plan-view' | 'history' | 'custom-builder'>('home');
  
  const { isAuth, setIsAuth } = useAuth();
  const { 
    isLoading, 
    currentPlan, 
    setCurrentPlan, 
    history, 
    deletePlan, 
    handleGenerate,
    handleCustomFinalize 
  } = useFitnessPlan(isAuth);

  const {
    searchTerm,
    setSearchTerm,
    activeDayIdx,
    setActiveDayIdx,
    customSchedule,
    activeDayName,
    filteredExercises,
    toggleExerciseForActiveDay,
    resetSchedule,
    planName,
    setPlanName,
    totalSelectedCount,
    activeDaysCount,
    DAYS
  } = useCustomBuilder();

  const {
    formType,
    setFormType,
    step,
    setStep,
    formData,
    setFormData,
    toggleSelection,
    resetForm
  } = useFormState();

  const onGenerate = async () => {
    const plan = await handleGenerate(formType, formData);
    if (plan) {
      setView('plan-view');
    }
  };

  const onCustomFinalize = async () => {
    const plan = await handleCustomFinalize(formData, customSchedule, planName);
    if (plan) {
      resetSchedule();
      setView('plan-view');
    }
  };

  const navigateToForm = (type: PlanType) => {
    setFormType(type);
    resetForm();
    setView('form');
  };

  return (
    <Layout
      isLoading={isLoading}
      isAuth={isAuth}
      view={view}
      setView={setView}
      setIsAuth={setIsAuth}
      setFormType={setFormType}
      setStep={setStep}
    >
      {view === 'home' && (
        <Home 
          setFormType={navigateToForm}
          setView={setView}
          setStep={setStep}
          setActiveDayIdx={setActiveDayIdx}
          history={history}
          setCurrentPlan={setCurrentPlan}
          deletePlan={deletePlan}
        />
      )}
      
      {view === 'form' && (
        <PlanForm 
          formType={formType}
          step={step}
          totalSteps={
            formType === PlanType.WORKOUT 
              ? (formData.trainingPreference === TrainingPreference.YOGA ? 4 : 5) 
              : 4
          }
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
          setView={setView}
          toggleSelection={toggleSelection}
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          handleGenerate={onGenerate}
        />
      )}

      {view === 'plan-view' && (
        <PlanView 
          currentPlan={currentPlan}
          setView={setView}
        />
      )}

      {view === 'history' && (
        <History 
          setView={setView}
          history={history}
          setCurrentPlan={setCurrentPlan}
          deletePlan={deletePlan}
        />
      )}

      {view === 'custom-builder' && (
        <CustomBuilder 
          setView={setView}
          DAYS={DAYS}
          activeDayIdx={activeDayIdx}
          setActiveDayIdx={setActiveDayIdx}
          customSchedule={customSchedule}
          activeDayName={activeDayName}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredExercises={filteredExercises}
          toggleExerciseForActiveDay={toggleExerciseForActiveDay}
          totalSelectedCount={totalSelectedCount}
          activeDaysCount={activeDaysCount}
          resetSchedule={resetSchedule}
          handleCustomFinalize={onCustomFinalize}
          planName={planName}
          setPlanName={setPlanName}
        />
      )}
    </Layout>
  );
};

export default App;
