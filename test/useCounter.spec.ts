import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // ใช้จาก vitest
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize count to 0 and val to 1', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val (default 1)', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should increment count by a custom val', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(5); // ตั้งค่า val ใหม่
    });

    act(() => {
      result.current.increment(); // ใช้ค่า val ที่ถูกตั้งแล้ว
    });

    expect(result.current.count).toBe(5);
  });

  it('should allow updating val dynamically', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.setVal(3);
    });

    expect(result.current.val).toBe(3);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(3);
  });
});
