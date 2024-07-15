export const animateWithGsapeTimeline = (
  timeline,
  groupRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(groupRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );
};
